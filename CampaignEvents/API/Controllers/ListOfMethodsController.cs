using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Application.FixtureMethods;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ListOfMethodsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<MethodAvailability>>> GetAllMethods()
        {
            return await Mediator.Send(new ListFixtureMethods.Query());
        }

        private void getListOfAllMethods()
        { 
          
        }
    }
}
