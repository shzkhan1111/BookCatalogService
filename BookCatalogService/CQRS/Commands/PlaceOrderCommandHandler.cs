using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using Azure;
using BookCatalogService.Models.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommandHandler : IRequestHandler<PlaceOrderCommand, List<OrderDTO>>
    {
        private readonly IHttpClientFactory _httpClientFactory;
        const string orderServiceUrl = "https://localhost:7163/api/orders";
        public PlaceOrderCommandHandler(IHttpClientFactory clientFactory)
        {
            _httpClientFactory = clientFactory;
        }
        public async Task<List<OrderDTO>> Handle(PlaceOrderCommand request, CancellationToken cancellationToken)
        {
            var client = _httpClientFactory.CreateClient();
            try
            {

                var book = await client.PostAsJsonAsync($"{orderServiceUrl}/checkout", request , cancellationToken)  ;
            }
            catch (Exception)
            {
                throw;
            }
            //var requestJson = JsonSerializer.Serialize(request);
            //var book = await client.PostAsJsonAsync($"{orderServiceUrl}", requestJson, cancellationToken);
            //var order = await book.Content.ReadFromJsonAsync<List<OrderDTO>>(cancellationToken: cancellationToken);

            return order;
        }
    }
}
