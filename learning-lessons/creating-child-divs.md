```
function Parent({ ImagesArr }) {
    const renderImages = ImagesArr.map((image, index) => {
        return <Child key={index} image={image} />;
    });

    return (
        <div>
            {renderImages}
        </div>
    );
}

function Child({ image }) {
    // Render the image or use the `image` prop as needed
    return (
        <div>
            <img src={image.src} alt={image.alt} />
        </div>
    );
}

```

why map not for loop ?
map returns an array so renderImages is array of Child components


If for loop to use 
```
function Parent({ ImagesArr }) {
    const renderImages = [];
    for (let i = 0; i < ImagesArr.length; i++) {
        renderImages.push(<Child key={i} image={ImagesArr[i]} />);
    }

    return (
        <div>
            {renderImages}
        </div>
    );
}```

<!-- 
Rendering Arrays:
	•	When you provide an array of JSX elements (like [<Child key={1} />, <Child key={2} />]) within curly braces in JSX, React knows how to handle this. It iterates over the array and renders each element sequentially. -->


    it is important to add key prompt