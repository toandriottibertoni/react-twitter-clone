import React from 'react';

import { Container, Header, BackIcon, ProfileInfo  } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon>
                </BackIcon>
            </button>
            <ProfileInfo>
                <strong>nome da pessoa</strong>
                <span>9999 tweets</span>
            </ProfileInfo>
        </Header>

        {/* <BottonMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottonMenu> */}

    </Container>
  );
}

export default Main;