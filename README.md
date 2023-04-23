#1.Explain what the simple List component does.
ans:--The List component is a functional component that receives an array of objects named "items" as a prop. Each object in the array contains a string field named "text". The List component uses the useState hook to declare a state variable called "selectedIndex", which is used to keep track of the index of the selected item.
In addition, the List component uses the useEffect hook with "selectedIndex" as a dependency. This means that the useEffect function is called when the page loads for the first time, and then each time the "selectedIndex" state variable is updated.
The List component also includes a function called "handleClick", which is passed to the SingleList component. This function is called when a list item is clicked, and it takes the index of the clicked item as an argument. If the clicked item's index is not equal to the current "selectedIndex" value, the "handleClick" function sets the "selectedIndex" state variable to the clicked item's index using the "setSelectedIndex" setter function. If the clicked item's index is equal to the current "selectedIndex" value, the "handleClick" function sets the "selectedIndex" state variable to an empty value, which unselects the item.
The List component returns an unordered list that iterates over the "items" array using the JavaScript map function. The SingleList component is used as a reusable component that takes several props, including "onClickHandler", which is a function that is required to be passed to handle the click event of each list item. The SingleList component also takes props for "text", "index", and "isSelected". Both the List and SingleList components are wrapped in the React-memo function to optimize performance by preventing unnecessary re-renders.

#2.What problems / warnings are there with code?
1- The useState hook is used incorrectly and variable selectedIndex and setSelectedIndex should be interchanged
const [selectedIndex, setSelectedIndex] = useState();

2- handleClick function should be changed as the index should selected and null when its is clicked again as functionality.

const handleClick = (index) => {
  if(index === selectedIndex){
    setSelectedIndex()
  }else{
    setSelectedIndex(index);
  }
};

3- while mapping items a unique value should be passed as key which will be index or else it will give a warning.

<SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />
  
  4- As isSelected should be an Boolean and should be true when selectedIndex is equal to index and false when selectedIndex is not equal to index.

<SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />
5- The array in prop type should Arrayof instead of shapedOf and shapeOf should be shape which gives warning.

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};
#3. Please fix, optimize, and/or modify the component as much as you think is necessary.
  
  deployment Link:-https://poetic-bunny-de3f32.netlify.app/
