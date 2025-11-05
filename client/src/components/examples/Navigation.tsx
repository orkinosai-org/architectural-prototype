import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation
      isAuthenticated={true}
      userEmail="user@example.com"
      onLogout={() => console.log('Logout clicked')}
    />
  );
}
