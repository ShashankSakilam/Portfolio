// Comprehensive component exports for seamless imports

// Shadcn UI Components
export * from './ui/button';
export * from './ui/card';
export * from './ui/input';
export * from './ui/tabs';
export * from './ui/navigation-menu';
export * from './ui/textarea';

// Magic UI Components
export * from './magicui';

// 21st.dev Components  
export * from './21stdev';

// Re-export all UI components for convenience
export { Button } from './ui/button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
export { Input } from './ui/input';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
export { Textarea } from './ui/textarea';
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './ui/navigation-menu';
