using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
        //available to any derive class
        //??= is a null colesence assignment operator -- if this is null we will assigned to the property what ever is to the right of it. 
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
    protected ActionResult HandleResult<T>(Result<T> result)
    {
            if (result==null) return NotFound();
            if(result.IsSuccess && result.Value !=null)
              return Ok(result.Value);
            if(result.IsSuccess && result.Value==null)
                return NotFound();
            return BadRequest(result.Error);
    }
    
    }
}
