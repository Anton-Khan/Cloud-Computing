using System;
using System.Threading;

namespace ExplodingATE
{
    class Call
    {
        public Call(Action job, string name)
        {
            Job = new Thread(new ThreadStart(job));
            Job.Name = name;
        }

        public Thread Job { get; set; }
    }
}
