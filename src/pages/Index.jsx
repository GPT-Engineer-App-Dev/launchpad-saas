import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Inc</h1>
        <p className="text-xl mb-8">Your solution for managing your business efficiently.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>
      <section id="features" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Description of feature one.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Description of feature two.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Description of feature three.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="pricing" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                $10/month
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                $20/month
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                $30/month
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Choose Plan</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button variant="primary" type="submit">Send Message</Button>
        </form>
      </section>
    </main>
  );
}

export default Index;