import Slider from './components/Slider';

const slidesDB = [
    {
        id: 1,
        src: './1.jpg',
        title: 'Canada',
        descriptions: 'Red canoes on a sea dock near a calm body of water',
    },
    {
        id: 2,
        src: './2.jpg',
        title: 'Amazonka',
        descriptions: 'Pond between green leaves of trees',
    },
    {
        id: 3,
        src: './3.jpg',
        title: 'Japane',
        descriptions: 'Dock under a cloudy sky in front of a mountain',
    },
    {
        id: 4,
        src: './4.jpg',
        title: 'Canada',
        descriptions: 'Lake and mountain',
    },
    {
        id: 5,
        src: './5.jpg',
        title: 'Mexico',
        descriptions: 'Fragments of gray and brown stone',
    },
];

function App () {
    return (
        <>
            <Slider slides={slidesDB} />
        </>
    );
}

export default App;
