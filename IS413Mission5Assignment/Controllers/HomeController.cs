using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using IS413Mission5Assignment.Models;

namespace IS413Mission5Assignment.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        // Home page with hobby overview.
        return View();
    }

    public IActionResult Calculator()
    {
        // Simple view model so the hourly rate is easy to change later.
        var model = new TutoringCalculatorViewModel
        {
            HourlyRate = 25m
        };

        return View(model);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
