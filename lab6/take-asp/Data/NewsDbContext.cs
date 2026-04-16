using Microsoft.EntityFrameworkCore;
using take_asp.Models;

namespace take_asp.Data;

public class NewsDbContext : DbContext
{
    public NewsDbContext(DbContextOptions< NewsDbContext > options) :
        base(options)
    {}

    public DbSet<NewsItem> News { get; set; } = null!;
}