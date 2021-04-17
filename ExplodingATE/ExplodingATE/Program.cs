using System;
using System.Threading;

namespace ExplodingATE
{
    class Program
    {
        static object locker;
        static ATE ate;
        static void Main(string[] args)
        {
            locker = new object();
            ate = new ATE(5, UnSafeCall);
            ate.Work();
        }

        static void SafeCall()
        {
            lock (locker)
            {
                 
                for (int i = 0; i < 5; i++)
                {
                    Console.Write(Thread.CurrentThread.Name + " --> ");
                    Console.Write(i+1 + " ");
                    Thread.Sleep(new Random().Next(100, 1000));
                }
                Console.WriteLine();
            }
        }

        static void UnSafeCall()
        {
            for (int i = 0; i < 5; i++)
            {
                Console.Write(Thread.CurrentThread.Name + " --> ");
                Console.Write(i+1);
                Thread.Sleep(new Random().Next(500, 1000 * 3));
            }
            Console.WriteLine();
        }
    }
}
