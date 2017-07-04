# set some variables
export RG="cd-k8s"
export ClusterName="cdk8s"
export location="westus"
# create a folder for the cluster ssh-keys
mkdir cdk8s

# login and create a resource group
az login
az group create --location $location --name $RG

# create an ACS k8s cluster
az acs create --orchestrator-type=kubernetes --resource-group $RG --name=$ClusterName --dns-prefix=$ClusterName --generate-ssh-keys --ssh-key-value ~/cdk8s/id_rsa.pub --location $location --agent-vm-size Standard_DS1_v2 --agent-count 2

# create an Azure Container Registry
az acr create --resource-group $RG --name $ClusterName --location $location --sku Basic --admin-enabled

# configure kubectl
az acs kubernetes get-credentials --name $ClusterName --resource-group $RG --file ~/cdk8s/kubeconfig --ssh-key-file ~/cdk8s/id_rsa
export KUBECONFIG="~/cdk8s/kubeconfig"

# test connection
kubectl get nodes
NAME                    STATUS                     AGE       VERSION
k8s-agent-96607ff6-0    Ready                      17m       v1.6.6
k8s-agent-96607ff6-1    Ready                      17m       v1.6.6
k8s-master-96607ff6-0   Ready,SchedulingDisabled   17m       v1.6.6


kubectl apply -f namespaces.yml
namespace "dev" created
namespace "prod" created

kubectl get namespaces
NAME          STATUS    AGE
default       Active    27m
dev           Active    20s
kube-public   Active    27m
kube-system   Active    27m
prod          Active    20s

# configure the container registry secret
az acr credential show --name $ClusterName --output table
USERNAME    PASSWORD                          PASSWORD2
----------  --------------------------------  --------------------------------
cdk8s       some-long-key-1                   some-long-key-2

kubectl create secret docker-registry regsecret --docker-server=$ClusterName.azurecr.io --docker-username=$ClusterName --docker-password=<some-long-key-1> --docker-email=admin@azurecr.io
secret "regsecret" created