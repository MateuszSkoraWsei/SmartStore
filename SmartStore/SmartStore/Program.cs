using Microsoft.AspNetCore.Components;
using SmartStore.Services;
using SmartStore.Models;
using Microsoft.AspNetCore.Identity;
using SmartStore.Context;
using SmartStore.Context;
using Microsoft.EntityFrameworkCore;



namespace SmartStore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);



            builder.Services.AddHttpClient("DummyJson", client =>
            {
                client.BaseAddress = new Uri("https://dummyjson.com/");
                client.DefaultRequestHeaders.Add("Accept", "application/json");
            });

            builder.Services.AddScoped<IProductService, ProductService>();
            builder.Services.AddScoped<ICategoryService, CategoryService>();

            builder.Services.AddControllers()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
                    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
                });



            builder.Services.AddRazorPages();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("ReactAppPolicy", policy =>
                {
                    policy.WithOrigins("https://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod();

                });
            });

            builder.Services.AddDbContext<AppDBContext>(options =>
                options.UseSqlServer(builder.Configuration["ConnectionStrings:DefaultConnection"])

            );

            builder.Services.AddIdentityCore<ApplicationUser>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
            })
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<AppDBContext>()
                .AddDefaultTokenProviders();


            builder.Services.AddIdentityCore<ApplicationUser>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
            })
                .AddRoles<IdentityRole>();

            
                

                var app = builder.Build();

                if (!app.Environment.IsDevelopment())
                {
                    app.UseExceptionHandler("/Home/Error");
                    app.UseHsts();
                    
                
                }
                else
                {
                    app.UseDeveloperExceptionPage();
                    app.UseSwagger();
                    app.UseSwaggerUI();
                    
            }
            app.UseStatusCodePagesWithReExecute("/Error/{0}");

                app.UseStaticFiles();
                app.UseRouting();

                app.UseCors("ReactAppPolicy");


                app.MapControllers();




                app.Run();
            
        }
    }
}
