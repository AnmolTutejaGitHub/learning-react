See Image Search project

Parent : 
```
function parent(){
    const handleSubmit = (data)=>{
        console.log('button in child was clicked, data);
    }
    return <Child onSubmit={handleSubmit}/>
}
```

CHILD COMPONENT : 
```
function Child({onSubmit}){
    cosnt handleClick = ()=>{
        const data = 'whatever';
        onSubmit(data);
    }
    return button onclick={handleChick} click </button>
}

```

Passing a function from parent as prop to child and child is calling it on chick 
Now this is hoe data is passed from child to parent 

function passed from parent will take some parameters when child will call it , it will provide that parameters

if wanna send data from this child to its sibling use useState in parent to do it 