using MediatR;
using Microsoft.AspNetCore.Mvc;
using BookCatalogService.CQRS.Commands;
using BookCatalogService.CQRS.Queries;
using BookCatalogService.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net;
using DataAccess.Models;
namespace BookCatalogService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BooksController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _mediator.Send(new GetBooksQuery());
            return Ok(books);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _mediator.Send(new GetBookByIdQuery(id));
            if (book == null)
                return NotFound();
            return Ok(book);
        }
        [HttpPost]
        public async Task<ActionResult<Book>> CreateBook(CreateBookCommand command)
        {
            var book = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Book>> UpdateBook(UpdateBookCommand updateBookCommand)
        {
            try
            {
                var updatedBook = await _mediator.Send(updateBookCommand);
                return Ok(updatedBook);
            }
            catch (Exception ex)
            {
                return StatusCode(500 , $"{ex.InnerException.Message} , {ex.Message}");
            }
            
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteBook(int id)
        {
            try
            {
                var deletedrecords = await _mediator.Send(new DeleteBookCommand(id));
                return Ok(deletedrecords);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"{ex.InnerException.Message} , {ex.Message}");
            }
        }

    }
}
