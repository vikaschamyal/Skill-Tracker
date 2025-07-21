const logicQuestions = [
    {
      id: 1,
      title: "Pagination Logic",
      description: "How to implement custom pagination in React?",
      example: `
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      `
    },
    {
      id: 2,
      title: "Search Functionality",
      description: "How to create a search filter in a list?",
      example: `
  const filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
      `
    },
    {
      id: 3,
      title: "Sorting Items",
      description: "How to sort an array of objects alphabetically?",
      example: `
  const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
      `
    },
    {
      id: 4,
      title: "CRUD - Add Item",
      description: "Adding new item to a list with form input.",
      example: `
  const addItem = () => setItems([...items, { id: Date.now(), title: input }]);
      `
    },
    {
      id: 5,
      title: "CRUD - Delete Item",
      description: "Removing an item from an array by ID.",
      example: `
  const deleteItem = (id) => setItems(items.filter(item => item.id !== id));
      `
    },
    {
      id: 6,
      title: "Form Handling",
      description: "Handling form state and submission.",
      example: `
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
      `
    },
    {
      id: 7,
      title: "Map over Data",
      description: "Rendering UI from an array using map().",
      example: `
  data.map((item, index) => <div key={index}>{item.title}</div>);
      `
    },
    {
      id: 8,
      title: "Filter List",
      description: "Filter items based on condition.",
      example: `
  const even = numbers.filter(n => n % 2 === 0);
      `
    },
    {
      id: 9,
      title: "Controlled Components",
      description: "Input field bound to component state.",
      example: `
  <input value={input} onChange={(e) => setInput(e.target.value)} />
      `
    },
    {
      id: 10,
      title: "Toggle Boolean",
      description: "Toggle boolean state (e.g., show/hide).",
      example: `
  const [show, setShow] = useState(false);
  setShow(prev => !prev);
      `
    },
  ];
  
  export default logicQuestions;
  