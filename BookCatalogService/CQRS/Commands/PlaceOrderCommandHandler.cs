using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using Azure;
using DataAccess.ModelDTOs;
using MediatR;

namespace BookCatalogService.CQRS.Commands
{
    public class PlaceOrderCommandHandler : IRequestHandler<PlaceOrderCommand, List<OrderGroupDTO>>
    {
        private readonly IHttpClientFactory _httpClientFactory;
        const string orderServiceUrl = "https://localhost:7163/api/orders";
        public PlaceOrderCommandHandler(IHttpClientFactory clientFactory)
        {
            _httpClientFactory = clientFactory;
        }
        public async Task<List<OrderGroupDTO>> Handle(PlaceOrderCommand request, CancellationToken cancellationToken)
        {
            var client = _httpClientFactory.CreateClient();
            try
            {
                var book = await client.PostAsJsonAsync($"{orderServiceUrl}/checkout", request, cancellationToken);
                var order = await book.Content.ReadFromJsonAsync<List<OrderGroupDTO>>(cancellationToken: cancellationToken);
                return order;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

    //public class PlaceOrderCommand : IRequest<List<OrderDTO>>
    //{
    //    public string CreditCardNo { get; set; }
    //    public List<OrderGroupDTO> Order { get; set; }
    //}
}
