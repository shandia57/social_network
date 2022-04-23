import * as fixtures from "./Fixtures";

async function loadFixtures() {
    await fixtures.loadFolders();
}

loadFixtures();