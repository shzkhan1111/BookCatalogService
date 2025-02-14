using BookCatalogService.CQRS.Commands;
using BookCatalogService.Models.ModelDTOs;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace BookCatalogService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CallOrderServiceController : ControllerBase
    {
        //this service calls the order service to create an order
        private readonly IMediator _mediator;
        public CallOrderServiceController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("CreateOrder")]
        public async Task<List<OrderDTO>> PlaceOrder(PlaceOrderCommand command)
        {
            var order = await _mediator.Send(command);
            return order;
        }
        
    }
}
