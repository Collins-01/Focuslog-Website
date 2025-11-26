import Link from "next/link"
import { Github, Twitter, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 md:px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <span className="font-bold text-xl">FocusLog</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Master your focus, build better habits, and achieve your goals with the ultimate productivity companion.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Download</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} FocusLog. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
