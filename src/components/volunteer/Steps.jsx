import { Chrono } from 'react-chrono';
import Typography from '@mui/material/Typography';

const Steps = () => {
  return (
    <Chrono
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: '#56B6A1',
        secondary: '#B6ECE2',
        cardBgColor: '#f3f3f3'
        // 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
      }}
    >
      <>
        <Typography variant="h6">Get familiar with CODE PDX</Typography>
        <ol>
          <li>
            Read our{' '}
            <a
              href="https://github.com/codeforpdx/codeofconduct"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Code of Conduct
            </a>
          </li>
          <li>
            Complete our{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfu4u9FB00RXd2TncbMLws_Ckot-vYqPK0oUHr81uLDjThE7Q/viewform"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              onboarding form
            </a>
          </li>
          <li>
            Review our{' '}
            <a
              href="https://github.com/codeforpdx"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              current projects
            </a>
          </li>
          <li>
            Read the{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              ADA Compliance Guide
            </a>
            , all CODE PDX projects are inclusive by design
          </li>
          <li>
            Join a project demo night & onboarding session listed on{' '}
            <a
              href="https://www.meetup.com/code-for-pdx/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              meetup
            </a>{' '}
            and the{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              events calendar
            </a>
          </li>
        </ol>
      </>
      <>
        <Typography variant="h6">CODE PDX uses Discord for communication</Typography>
        <ol>
          <li>
            Join the{' '}
            <a
              href="https://discord.gg/qQ2sNXMagU"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              CODE PDX Discord server
            </a>{' '}
            and self assign roles. These roles will display project channels and help others
            identify the roles you intend to fulfill.{' '}
          </li>
          <li>
            Introduce yourself in the{' '}
            <a
              href="https://discord.com/channels/1068260532806766733/1075286322530484256"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              #introductions
            </a>{' '}
            channel, this is a good way to network with current members.
          </li>
          <li>
            Request GitHub access in the{' '}
            <a
              href="https://discord.com/channels/1068260532806766733/1078124139983945858"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              #github-access-request
            </a>{' '}
            channel.
          </li>
          <li>Request project specific access to Google Drive and other project content.</li>
        </ol>
        <Typography>
          If you are new to discord, there is a beginners user guide available{' '}
          <a
            href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#56B6A1',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            HERE
          </a>
        </Typography>
      </>
      <>
        <ul>
          <li>
            After seeing what we are up to, reach out to team members of a project to connect &amp;
            let them know how you would like to contribute. You can find active members by seeing
            who recently contributed to a repository or the recent discord chat history of a
            project.
          </li>
          <li>
            The GitHub repository is a good place to see what&apos;s active within CODE PDX and
            contains a writeup of our contribution guidelines that we follow to standardize our
            workflow.
          </li>
        </ul>
      </>
      <>
        <ul>
          <li>
            Find your first issue to work on from the GitHub repo of the project of your choice.
            Check out our{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Wiki
            </a>{' '}
            for guidance on picking your first issue.
          </li>
          <li>Create a branch for your issue or feature and collaborate with other members.</li>
          <li>
            Create a pull request off of our GitHub template, and submit for review. Pull requests
            require at least one other person to review & approve before merging.
          </li>
        </ul>
      </>
      <>
        <ul>
          <li>All of these steps can be completed remotely or at an in-person event.</li>
          <li>
            We invite people to contribute to CODE PDX regardless of skill set or skill level.
          </li>
          <li>
            When in doubt, proactively reach out in the Discord text channels. They are frequently
            checked by members and will likely yield a swift response.
          </li>
        </ul>
      </>
    </Chrono>
  );
};

export default Steps;
