using System.Net.Http;
using BookCatalogService.Models.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommandHandler : IRequestHandler<PlaceOrderCommand, List<OrderDTO>>
    {
        private readonly IHttpClientFactory _httpClientFactory;
        const string orderServiceUrl = "https://localhost:7088/api/orders";
        public PlaceOrderCommandHandler(IHttpClientFactory clientFactory)
        {
            _httpClientFactory = clientFactory;
        }
        public async Task<List<OrderDTO>> Handle(PlaceOrderCommand request, CancellationToken cancellationToken)
        {
            var client = _httpClientFactory.CreateClient();
            var book = await client.GetFromJsonAsync<OrderDTO>($"{orderServiceUrl}/{1}", cancellationToken);

            return null;
        }
    }
}
