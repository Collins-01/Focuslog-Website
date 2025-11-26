import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Section,
    Button,
    Hr,
    Link,
} from "@react-email/components"
import * as React from "react"

interface WelcomeEmailProps {
    name?: string
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to the FocusLog Waitlist!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Welcome to FocusLog! 🚀</Heading>
                <Text style={text}>
                    Hi {name || "there"},
                </Text>
                <Text style={text}>
                    Thank you for joining the waitlist for FocusLog. We're building the ultimate productivity companion to help you master your focus and build better habits.
                </Text>
                <Text style={text}>
                    We're working hard to get the beta ready. You'll be among the first to know when we launch!
                </Text>
                <Section style={btnContainer}>
                    <Button style={button} href="https://twitter.com/focuslogapp">
                        Follow us on Twitter
                    </Button>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>
                    FocusLog Team
                    <br />
                    Master Your Focus. Build Better Habits.
                </Text>
            </Container>
        </Body>
    </Html>
)

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
}

const h1 = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
    color: "#1a1a1a",
}

const text = {
    color: "#444",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "16px 0",
}

const btnContainer = {
    textAlign: "center" as const,
    margin: "32px 0",
}

const button = {
    backgroundColor: "#3B82F6",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px 24px",
}

const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
}

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "24px",
}
