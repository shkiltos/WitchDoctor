package inc.vata.WitchDoctor.domain.service;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(MockitoJUnitRunner.class)
class RegionsTest {

    @Test
    void getRegion() {
        assertEquals(Regions.getRegion("Васильевская улица", "51к1"), "Участок 23");
        assertEquals(Regions.getRegion("Касимовское шоссе", "40к1"), "Участок 14");
        assertEquals(Regions.getRegion("Касимовское шоссе", "7к1"), "Участок 13");
        assertEquals(Regions.getRegion("Большая улица", "153"), "Участок 1");
    }
}