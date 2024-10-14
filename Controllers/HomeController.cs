using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NeocolWebsiteCore.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace NeocolWebsiteCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult DipType()
        {
            return View();
        }

        public IActionResult SprayType()
        {
            return View();
        }
        public IActionResult PTPlant()
        {
            return View();
        }
        public IActionResult ConvayorPowderCoating()
        {
            return View();
        }
        public IActionResult BatchPowderCoating()
        {
            return View();
        }

        public IActionResult LiquidConvayorCoating()
        {
            return View();
        }
        public IActionResult LiquidBatchCoating()
        {
            return View();
        }
        public IActionResult ECoatingLine()
        {
            return View();
        }
        public IActionResult UVPaintingLine()
        {
            return View();
        }
        public IActionResult WoodEffectLine()
        {
            return View();
        }
        public IActionResult MaterialHandling()
        {
            return View();
        }
        public IActionResult ConvayorCuringOven()
        {
            return View();
        }
        public IActionResult BatchCuringOven()
        {
            return View();
        }
        public IActionResult PaintShop()
        {
            return View();
        }

        public IActionResult Highlights()
        {
            return View();
        }
        public IActionResult Commitments()
        {
            return View();
        }
        public IActionResult Environment()
        {
            return View();
        }

    }
}
