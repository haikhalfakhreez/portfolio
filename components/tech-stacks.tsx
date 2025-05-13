import { Section } from "@/components/section";
import { SiteLink } from "@/components/site-link";

const techStacks = {
  "Programming Languages": [
    {
      name: "Java",
      url: "https://www.java.com/en/",
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/en",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      url: "https://www.javascript.com/",
    },
    {
      name: "Go",
      url: "https://go.dev/",
    },
    {
      name: "PHP",
      url: "https://www.php.net/",
    },
    {
      name: "Python",
      url: "https://www.python.org/",
    },
    {
      name: "Scala",
      url: "https://www.scala-lang.org/",
    },
    {
      name: "Lua",
      url: "https://www.lua.org/",
    },
  ],
  Frameworks: [
    {
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      name: "React.js",
      url: "https://react.dev/",
    },
    {
      name: "Vue.js",
      url: "https://vuejs.org/",
    },
    {
      name: "Laravel",
      url: "https://laravel.com/",
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
    },
    {
      name: "Hono.js",
      url: "https://hono.dev/",
    },
    {
      name: "Gin",
      url: "https://gin-gonic.com/",
    },
    {
      name: "Nuxt.js",
      url: "https://nuxt.com/",
    },
    {
      name: "Remix",
      url: "https://remix.run/",
    },
    {
      name: "FastAPI",
      url: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Http4s",
      url: "https://http4s.org/",
    },
  ],
  Infrastructure: [
    {
      name: "Docker",
      url: "https://podman.io/",
    },
    {
      name: "Kubernetes",
      url: "https://kubernetes.io/",
    },
    {
      name: "Terraform",
      url: "https://www.terraform.io/",
    },
    {
      name: "Kustomize",
      url: "https://kustomize.io/",
    },
    {
      name: "Helm",
      url: "https://helm.sh/",
    },
    {
      name: "Atlantis",
      url: "https://www.runatlantis.io/",
    },
    {
      name: "Scalr",
      url: "https://www.scalr.com/",
    },
    {
      name: "GitHub Actions",
      url: "https://github.com/features/actions",
    },
    {
      name: "ArgoCD",
      url: "https://github.com/argoproj/argo-cd",
    },
    {
      name: "AWS EC2, ECS, ECR, EKS",
      url: "https://aws.amazon.com/",
    },
    {
      name: "AWS Lambda",
      url: "https://aws.amazon.com/lambda/",
    },
    {
      name: "APISIX",
      url: "https://apisix.apache.org/",
    },
    {
      name: "AWS Secrets Manager",
      url: "https://aws.amazon.com/secrets-manager/",
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
    },
    {
      name: "AWS Aurora & RDS",
      url: "https://aws.amazon.com/rds/",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Redis",
      url: "https://redis.io/",
    },
    {
      name: "DynamoDB",
      url: "https://aws.amazon.com/dynamodb/",
    },
    {
      name: "DocumentDB",
      url: "https://aws.amazon.com/documentdb/",
    },
    {
      name: "OpenSearch",
      url: "https://opensearch.org/",
    },
    {
      name: "Elasticsearch",
      url: "https://www.elastic.co/elasticsearch/",
    },
    {
      name: "Hibernate",
      url: "https://hibernate.org/",
    },
    {
      name: "Prisma",
      url: "https://www.prisma.io/",
    },
    {
      name: "Sequelize",
      url: "https://sequelize.org/",
    },
    {
      name: "Drizzle ORM",
      url: "https://orm.drizzle.team/",
    },
  ],
  "Event, Messaging, & Queues": [
    {
      name: "Kafka",
      url: "https://kafka.apache.org/",
    },
    {
      name: "AWS SQS",
      url: "https://aws.amazon.com/sqs/",
    },
    {
      name: "AWS SNS",
      url: "https://aws.amazon.com/sns/",
    },
    {
      name: "AWS Step Functions",
      url: "https://aws.amazon.com/step-functions/",
    },
  ],
  "Data & Analytics": [
    {
      name: "AWS S3",
      url: "https://aws.amazon.com/s3/",
    },
    {
      name: "AWS Glue",
      url: "https://aws.amazon.com/glue/",
    },
    {
      name: "AWS Redshift",
      url: "https://aws.amazon.com/redshift/",
    },
    {
      name: "Snowflake",
      url: "https://www.snowflake.com/",
    },
    {
      name: "AWS CloudFront",
      url: "https://aws.amazon.com/cloudfront/",
    },
    {
      name: "DuckDB",
      url: "https://duckdb.org/",
    },
    {
      name: "AWS EMR",
      url: "https://aws.amazon.com/emr/",
    },
    {
      name: "Apache Spark",
      url: "https://spark.apache.org/",
    },
    {
      name: "Apache Airflow",
      url: "https://airflow.apache.org/",
    },
    {
      name: "DBT",
      url: "https://www.getdbt.com/",
    },
    {
      name: "Airbyte",
      url: "https://airbyte.com/",
    },
  ],
  "AI & ML": [
    {
      name: "AWS Bedrock",
      url: "https://aws.amazon.com/bedrock/",
    },
    {
      name: "LangChain",
      url: "https://github.com/langchain-ai/langchain",
    },
  ],
  "Observability & Monitoring": [
    {
      name: "AWS CloudWatch",
      url: "https://aws.amazon.com/cloudwatch/",
    },
    {
      name: "Datadog",
      url: "https://www.datadoghq.com/",
    },
    {
      name: "Sentry",
      url: "https://sentry.io/",
    },
    {
      name: "PageDuty",
      url: "https://www.pagerduty.com/",
    },
  ],
  Libraries: [
    {
      name: "React Query",
      url: "https://tanstack.com/query/latest/",
    },
    {
      name: "SWR",
      url: "https://swr.vercel.app/",
    },
    {
      name: "React Hook Form",
      url: "https://react-hook-form.com/",
    },
    {
      name: "Zod",
      url: "https://zod.dev/",
    },
    {
      name: "Jotai",
      url: "https://github.com/pmndrs/jotai",
    },
    {
      name: "Zustand",
      url: "https://github.com/pmndrs/zustand",
    },
  ],
  "Authentication & Authorization": [
    {
      name: "Better Auth",
      url: "https://www.better-auth.com/",
    },
    {
      name: "Next-Auth",
      url: "https://next-auth.js.org/",
    },
    {
      name: "Permit.io",
      url: "https://permit.io/",
    },
    {
      name: "Okta",
      url: "https://www.okta.com/",
    },
    {
      name: "OAuth2",
      url: "https://oauth.net/2/",
    },
  ],
  "UI Libraries": [
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Shadcn UI",
      url: "https://ui.shadcn.com/",
    },
    {
      name: "Material UI",
      url: "https://mui.com/",
    },
    {
      name: "Reshaped",
      url: "https://reshaped.so/",
    },
    {
      name: "Radix UI",
      url: "https://radix-ui.com/",
    },
    {
      name: "Headless UI",
      url: "https://headlessui.com/",
    },
    {
      name: "Storybook",
      url: "https://storybook.js.org/",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
    },
    {
      name: "Framer Motion",
      url: "https://motion.dev/",
    },
  ],
  "Testing Libraries": [
    {
      name: "Mockito",
      url: "https://site.mockito.org/",
    },
    {
      name: "JUnit",
      url: "https://junit.org/junit5/",
    },
    {
      name: "LocalStack",
      url: "https://github.com/localstack/localstack",
    },
    {
      name: "React Testing Library",
      url: "https://testing-library.com/docs/react-testing-library/intro/",
    },
    {
      name: "Jest",
      url: "https://jestjs.io/",
    },
    {
      name: "Vitest",
      url: "https://vitest.dev/",
    },
    {
      name: "Cypress",
      url: "https://www.cypress.io/",
    },
    {
      name: "Playwright",
      url: "https://playwright.dev/",
    },
  ],
} as const;

export function TechStacks() {
  return (
    <Section title="Tech Stacks:">
      <ul className="space-y-6 text-sm">
        {Object.entries(techStacks).map(([category, items]) => (
          <li key={category}>
            <h3 className="mb-4 text-xs">{category}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {items.map((item) => (
                <li key={item.name}>
                  -{" "}
                  <SiteLink
                    href={item.url}
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
