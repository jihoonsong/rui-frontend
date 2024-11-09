import MobileLayout from '../../components/mobile_layout';

export default function DoneQuestions() {
    return (
      <MobileLayout>
        <h1 className="text-2xl font-bold">Congrats!</h1>
        <p className="text-lg">You answered all questions.</p>
        <button className="mt-4 px-8 py-2 bg-white border-2 border-green-500 text-green-500 rounded-full text-lg font-semibold flex items-center space-x-2">
          <span>View Results</span>
        </button>  
      </MobileLayout> 
    );
  }
  