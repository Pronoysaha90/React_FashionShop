import { Navigate, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { User, Package, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const menuItems = [
    { icon: Package, label: 'My Orders', href: '/orders', count: 3 },
    { icon: Heart, label: 'Wishlist', href: '/wishlist', count: 12 },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Profile Header */}
          <div className="glass-card rounded-2xl p-8 text-center mb-8">
            <div className="w-24 h-24 glass rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display font-bold">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>

          {/* Menu Items */}
          <div className="glass-card rounded-2xl overflow-hidden mb-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center justify-between p-4 hover:bg-secondary transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-glass-border' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.count && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs">
                      {item.count}
                    </span>
                  )}
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>

          {/* Logout Button */}
          <Button
            onClick={logout}
            variant="outline"
            className="w-full"
            size="lg"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
