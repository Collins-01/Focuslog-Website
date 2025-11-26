import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Section,
    Hr,
} from "@react-email/components"
import * as React from "react"

interface AdminNotificationEmailProps {
    email: string
    name?: string
    platform?: string
    referral_source?: string
}

export const AdminNotificationEmail = ({
    email,
    name,
    platform,
    referral_source,
}: AdminNotificationEmailProps) => (
    <Html>
        <Head />
        <Preview>New Waitlist Signup: {email}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>New User Joined Waitlist! 🎉</Heading>
                <Section style={section}>
                    <Text style={text}>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Text style={text}>
                        <strong>Name:</strong> {name || "N/A"}
                    </Text>
                    <Text style={text}>
                        <strong>Platform:</strong> {platform || "N/A"}
                    </Text>
                    <Text style={text}>
                        <strong>Referral Source:</strong> {referral_source || "N/A"}
                    </Text>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>
                    FocusLog Admin Notification
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

const section = {
    padding: "24px",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    backgroundColor: "#f9fafb",
}

const text = {
    color: "#444",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "8px 0",
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
