using DataAccess.Data;
using DataAccess.ModelDTOs;
using DataAccess.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;

namespace OrderService.CQRS.Commands
{
    public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, Order>
    {
        private readonly BookingOrderingDBContext _context;
        private readonly IHttpClientFactory _httpClientFactory;
        public CreateOrderCommandHandler(BookingOrderingDBContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
        }
        public async Task<Order> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            // Use HttpClient to call the Book Catalog Service
            var client = _httpClientFactory.CreateClient();
            // Adjust the URL if necessary (assumes BookCatalogService is running on port 5001)https://localhost:7088/swagger/index.html
            var book = await client.GetFromJsonAsync<BookDto>($"https://localhost:7088/api/books/{request.BookId}", cancellationToken);
            if (book == null)
            {
                throw new System.Exception("Book not found");
            }
            var order = new Order
            {
                BookId = request.BookId,
                TotalPrice = book.Price * request.Quantity
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync(cancellationToken);
            return order;
        }
    }
}
