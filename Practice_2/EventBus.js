function UniqueIdGenerator(){
    let id = 0;

    return function getNextUId(){
        id += 1;
        return id;
    }
}

function Bus(){

    const subscribers = {};
    const GetNextUId = UniqueIdGenerator();

    function Subscribe(eventName, callback){

        if (subscribers[eventName] === undefined) {
            subscribers[eventName] = new Map();
        }

        const id = GetNextUId();
        subscribers[eventName].set(id, callback);

        function Unsubscribe(){
            subscribers[eventName].delete(id);
            if(subscribers[eventName].size == 0) delete subscribers[eventName];
        }

        return {
            Unsubscribe
        }
    }

    function Publish(eventName, data){

        if (subscribers[eventName] === undefined) {
            return;
        }

        subscribers[eventName].forEach(callback=>{
            callback(data);
        });
    }

    return {
        Subscribe,
        Publish
    }
}


//Callbacks
function CallbackOne(data){
    console.log(data + " 1");
}

function CallbackTwo(data){
    console.log(data + " 2");
}

//Test funciton of Publish events
function ExampleOfPublishAll(){
    console.log("\tEvent-1");
    bus.Publish("event-1", "ev1");
    console.log("\tEvent-2");
    bus.Publish("event-2", "ev2");
    console.log("\n");
}


//Example
    //Create, Subscribe and Publish
const bus = Bus();

const FirstModUns = bus.Subscribe("event-1", CallbackOne);
const SecondModUns = bus.Subscribe("event-1", CallbackOne);
const ThirdModUns = bus.Subscribe("event-2", CallbackTwo);

ExampleOfPublishAll();

    // Unsubscribe second module and Publish again
SecondModUns.Unsubscribe();

ExampleOfPublishAll();


