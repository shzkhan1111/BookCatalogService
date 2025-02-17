using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderService.CQRS.Commands;
using OrderService.Models;

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
            return CreatedAtAction(nameof(CreateOrder), new { id = order.Id }, order);
        }
    }
}
