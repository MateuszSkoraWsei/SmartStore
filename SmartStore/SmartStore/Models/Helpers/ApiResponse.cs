using Microsoft.Identity.Client;

namespace SmartStore.Models.Helpers
{
    public class ApiResponse<T>
    {
        public bool Succes { get; set; }
        public string? Message {get; set; }

        public T? Data { get; set; }

        public static ApiResponse<T> OK(T data, string? message = null)
            => new ApiResponse<T> { Succes = true, Data = data, Message = message };

        public static ApiResponse<T> Fail( string? message = null)
            => new ApiResponse<T> { Succes = false, Message = message };

    }
}
