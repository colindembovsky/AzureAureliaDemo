using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Reflection;

namespace API.Controllers
{
	[Route("api/[controller]")]
	public class VersionController : Controller
	{
		// GET api/values
		[HttpGet]
		public string Get()
		{
			var version = Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;
			return $"\"{version}\"";
		}
	}
}
