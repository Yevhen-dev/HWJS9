// Create a function that accepts a number and creates the specified number of blocks with the style border-radius, width 50px height 50px and background-color
let firsTask = document.querySelector(".task-first");

function createElem( num ) {
    for( let i = 0; i < num; i++ ) {
        let item = document.createElement( "div" );
        item.style.cssText += "border-radius: 30px; width: 50px; height: 50px; background-color: green;"
        firsTask.appendChild( item ); 
    }
};
createElem( 10 );


// Create a block using js set the block style display flex and in the middle of this block create 50 div blocks using the function
// add circle-elemt class to all created 50 div elements and class test to each odd element
// Replace class circle-elemt with odd-circle-elemt in even elements
// Add a random background to all 50 elements
let flexBlock = document.createElement( "div" );
flexBlock.classList.add( "flex" );
flexBlock.style.cssText += " display: flex; flex-direction: column; align-items: center; ";
firsTask.after( flexBlock );

function createFiftyBlocks () {
    for( let i = 0; i < 50; i++ ) {
        let div = document.createElement( "div" );
        div.classList.add( "circle-elemt" );
        div.innerText = i;
        if( i % 2 ) {
            div.classList.add( "test" );
        } else {
            div.classList.replace( "circle-elemt", "odd-circle-elemt" );
        }
        div.style.cssText = `background-color: rgb( ${randomColor()} ) ; padding: 10px; margin-bottom: 5px; `;
        flexBlock.appendChild( div );
    }
}

createFiftyBlocks();


function randomColor() {
    let res = [];
    for( let i = 0; i < 3; i++ ) {
        let color = Math.floor( Math.random() * 256 );
        res.push( color )
    }
    return res.join(",") ;
};


// Write a function that accepts an array of objects and values ​​to filter. The function should return an HTML list (ul) containing the filter results.
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Bradly', age: 21 },
    { name: 'David', age: 40 },
    { name: 'Alan', age: 12 }
];

function createSortList( arr, sortValue ) {
    let copy = [...arr];
    if( sortValue === "age" ) {
        copy.sort( (a, b) => a[sortValue] - b[sortValue] );
    } else {
        copy.sort( (a, b) => a[sortValue].toLowerCase() < b[sortValue].toLowerCase() ? -1 : 1) ;
    }
    console.log(copy);
    
    let ul = document.createElement( "ul" );
    for( let item of copy ) {
        let li = document.createElement( "li" );
        li.innerText = ` Welcome user ${ item.name } your age is ${ item.age } `;
        ul.appendChild( li );
    }
    return ul;
};

console.log( createSortList( data, "age" ) );

