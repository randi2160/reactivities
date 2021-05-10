using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.FixtureMethods
{
    public class ListFixtureMethods
    {
        public class Query : IRequest<List<MethodAvailability>> { };
        public class Handler : IRequestHandler<Query, List<MethodAvailability>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<MethodAvailability>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.ListOfFixtureMethods.ToListAsync();
            }

            

            //async Task<List<MethodAvailability>> IRequestHandler<Query, List<MethodAvailability>>.Handle(Query request, CancellationToken cancellationToken)
            //{
            //    //throw new System.NotImplementedException();
                
            //    return await _context.ListOfFixtureMethods.ToListAsync();
            //}
        }
    }
}