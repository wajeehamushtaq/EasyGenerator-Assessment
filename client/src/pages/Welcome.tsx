import Header from '../components/Common/Header';

export default function WelcomePage() {
  return (
    <div className="px-4 w-full space-y-8">
      <Header
        heading="Welcome!"
        paragraph="Welcome to the site "
      />
    </div>
  );
}
