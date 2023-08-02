export type DropDownDirection =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

export type Justify = 'left' | 'center' | 'right';

export type Align = 'top' | 'center' | 'bottom';

export type TypeDisplaying = 'vertical' | 'horizontal';

export type CountAmount = '1' | '2';

export type SizeElement = 'small' | 'medium' | 'large';

export type PositionTooltip = 'top' | 'bottom' | 'right' | 'left';

// "" | "Transferred" | 'AwaitingSign' | "Minted" | "Rejected" | "RequestedBack" | "Burned" | "New" | "Shipped" | "Received" | "Processing" | "Canceled" | "PartlyMinted" | "FullyMinted" | "Draft" | "Pending" | "PaymentPending" | "Delivered" | "PaymentReceived"| "Invalid" | "Frozen" | "Valid" | 'Listed'
export type AllStatuses =
  | ''
  | 'Transferred'
  | 'AwaitingSign'
  | 'Minted'
  | 'Rejected'
  | 'RequestedBack'
  | 'Burned'
  | 'New'
  | 'Shipped'
  | 'Received'
  | 'Processing'
  | 'Canceled'
  | 'PartlyMinted'
  | 'FullyMinted'
  | 'Draft'
  | 'Pending'
  | 'PaymentPending'
  | 'Delivered'
  | 'PaymentReceived'
  | 'Invalid'
  | 'Frozen'
  | 'Valid'
  | 'Listed';

export type TStatusAlert = 'success' | 'warning' | 'error' | 'info';
