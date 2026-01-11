import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Package, ChevronRight } from 'lucide-react';

const OrdersPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-10',
      status: 'Delivered',
      total: 524000,
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2025-01-08',
      status: 'In Transit',
      total: 199000,
      items: 1,
    },
    {
      id: 'ORD-003',
      date: '2025-01-05',
      status: 'Processing',
      total: 732000,
      items: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500/20 text-green-400';
      case 'In Transit':
        return 'bg-blue-500/20 text-blue-400';
      case 'Processing':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-8">My Orders</h1>

        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="glass-card rounded-2xl p-6 flex items-center justify-between gap-4 hover:shadow-card-hover transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      {order.items} items • {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      Rp{order.total.toLocaleString('id-ID')}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-lg ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
            <p className="text-muted-foreground">
              Start shopping to see your orders here.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;
