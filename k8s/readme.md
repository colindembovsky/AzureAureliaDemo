# Kubernetes Demo App

## Structure

There are 2 (docker) images: frotend and api. A [VSTS Build](https://onviavs.visualstudio.com/NWCadencePOC/_build/index?context=allDefinitions&path=%5C&definitionId=19&_a=completed) builds the images from the source repo and pushes them to the [Onvia Container Registry](onvia.azurecr.io).

The containers are wrapped into Pods for Kubernetes and the pods are wrapped into Replication Sets for reliability and scalability (the definitions are of type `Deployments`).

The containers are "exposed" using `Services` that give the replication sets fixed IPs within the Kubernetes Cluster.

There are 2 files for the Kubernetes definition:

1. `app-demo-backend.yml`: the `Deployment` and `Service` definitions for the backend
1. `app-demo-frontend.yml`: the `Deployment` and `Service` definitions for the frontend

## Running Locally

You can run the images from the Azure Container Registry (ACR) by installing [Minikube](https://github.com/kubernetes/minikube) locally. You will also need to install [kubectl](https://kubernetes.io/docs/user-guide/kubectl-overview/).

#### Create an ACS Secret
In order for the services to run, you need to specify a "secret" to authenticate with the ACR. To create the ACR, use the following command:

```sh
kubectl create secret docker-registry onviacontainerreg --docker-server=onvia.acr.io --docker-username=onvia --docker-password=<key from portal> --docker-email=not@important.com
```

The name `onviacontainerreg` is referred to in the yml files.

#### Deploy the backend service

Run the following command:

```sh
kubectl config use-context minikube

kubectl apply -f ./app-demo-backend.yml --record
```

## Create a Kubernetes Cluster in Azure

Follow [these instructions](https://docs.microsoft.com/en-us/azure/container-service/container-service-create-acs-cluster-cli).

For example:
```sh
az login

export LOCATION="westus"
export RG="onviak8spoc"
export DNS="onviak8spoc"

az group create -l $LOCATION -n $RG

az acs create --orchestrator-type=kubernetes --resource-group $RG --name=$DNS --dns-prefix=$DNS --generate-ssh-keys --ssh-key-value ~/onviak8spoc/id_rsa.pub --agent-vm-size Standard_DS1_v2 --agent-count 2 --tags POC
```