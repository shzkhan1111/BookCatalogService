using DataAccess.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderService.CQRS.Commands;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]  
        public async Task<ActionResult<Order>> CreateOrder(CreateOrderCommand command)
        {
            var order = await _mediator.Send(command);
            return Ok(order);
        }
        [HttpPost("checkout")]
        public async Task<ActionResult<int>> CheckOutOrder(CreateOrderCommand command)
        {
            var order = await _mediator.Send(command);
            return Created(nameof(CheckOutOrder) , order);
        }
    }
}
