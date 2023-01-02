export const questions = [
    {
        id : 1,
        question : "What is JSX?",
        ans : "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code"
    },
    {
        id : 2,
        question : "Can web browsers read JSX directly? ",
        ans : "Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel"
    },
    {
        id : 3,
        question :  "What is the virtual DOM?",
        ans : "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects"
    },
    {
        id : 4,
        question :  "Why use React instead of other frameworks, like Angular?",
        ans : " React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares its previous state and updates only those components in the real DOM, whose states have changed, rather than updating all the components — like conventional web applications"
    }
    ,
    {
        id : 5,
        question :  "What is the difference between the ES6 and ES5 standards?",
        ans : "This is one of the most frequently asked react interview questions.   These are the few instances where ES6 syntax has changed from ES5 syntax:"
    }
    ,
    {
        id : 6,
        question :  " What is an event in React?",
        ans : "An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML"
    },
    {
        id : 7,
        question :  "What are synthetic events in React?",
        ans : "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers. The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event"
    },
    {
        id : 8,
        question :  "Explain how lists work in React",
        ans : "We create lists in React as we do in regular JavaScript. Lists display data in an ordered format The traversal of lists is done using the map() function"
    }

]