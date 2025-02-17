using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using OrderService.MiddleWare.MiddleWareExtention;
using DataAccess.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(
    options =>
    options.AddPolicy("AllowReactApp",
    policy =>
    {
        policy.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod();
    }));

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddMediatR(Assembly.GetExecutingAssembly());

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<BookingOrderingDBContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddHttpClient();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    await SeedData.SeedDataBaseAsync(app);
}


app.UseCors("AllowReactApp");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.UseAuthorization();

app.MapControllers();

app.Run();
