import IssueProvider from './contexts/Issue';
import Issues from './components/Issues';
import './App.css';

function App() {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
      <Issues />
    </IssueProvider>
  );
}
export default App;
