using System.Runtime.CompilerServices;

namespace OrderService.MiddleWare.MiddleWareExtention
{
    public static class SeedDataExtension
    {
        public static IApplicationBuilder UseSeedData (this IApplicationBuilder _builder)
        {
            return _builder.UseMiddleware<SeedDataMiddleWare>();
        }
    }
}
