using System;
using System.Collections.Generic;


namespace ExplodingATE
{
    class ATE
    {
        public ATE(int length, Action job)
        {
            calls = new List<Call>();
            for (int i = 0; i < length; i++)
            {
                calls.Add(new Call(job, "Call["+i+"]"));
            }
            
        }
        
        public List<Call> calls{ get; set; }

        public void Work()
        {
            for (int i = 0; i < calls.Count; i++)
            {
                calls[i].Job.Start();
            }
        }

    }
}
