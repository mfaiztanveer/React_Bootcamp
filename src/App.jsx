import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import SelectBox from './components/SelectBox/SelectBox';
import cardData from './data/CardData';
import './App.css';

const App = () => {
    const options = [
        { label: 'Cat', value: 'cat' },
        { label: 'Parrot', value: 'parrot' },
        { label: 'Fox', value: 'fox' }
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <h2>Choose Your Pet</h2>
                <div className="card-container">
                    {cardData.map((card) => (
                        <Card
                            key={card.title}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
                <SelectBox options={options} />
            </main>
            <Footer text="© 2024 M.Faiz Tanveer" />
        </div>
    );
}

export default App;
