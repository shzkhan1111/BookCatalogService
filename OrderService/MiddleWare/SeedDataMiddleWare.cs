using DataAccess.Data;

namespace OrderService.MiddleWare
{
    public class SeedDataMiddleWare
    {
        private readonly RequestDelegate _next;
        private readonly IHost _host;
        public SeedDataMiddleWare(RequestDelegate next , IHost host)
        {
            _next = next;
            _host = host;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            using (var scope = _host.Services.CreateScope())
            {
                await SeedData.SeedDataBaseAsync(_host);
            }
            await _next(context);
        }
    }
}
