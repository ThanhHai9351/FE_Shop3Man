import { Badge } from '@/components/ui/badge';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const CartBar = ({ itemCount }:{itemCount:number}) => {
    return (
        <div className="relative flex items-center">
      <CiShoppingCart size={30} />
      {itemCount > 0 && (
        <Badge className="absolute left-4 top-0 right-0 bg-red-600 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
          {itemCount}
        </Badge>
      )}
    </div>
    );
}

export default CartBar;