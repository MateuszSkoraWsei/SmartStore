namespace SmartStore.Services
{
    public interface ICategoryService
    {
        Task<List<string>> GetAllCategories();
    }
}
