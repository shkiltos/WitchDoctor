package inc.vata.WitchDoctor.domain.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Regions {

    private static Map<String, Map<String, List<String>>> regions;

    public static Map<String, Map<String, List<String>>> getRegions() {
        if (regions != null) {
            return regions;
        }

        regions = new HashMap<>();

        Map<String, List<String>> region17 = new HashMap<>();
        region17.put("1-й Бульварный проезд", Collections.singletonList("2"));
        region17.put("2-й Бульварный проезд", Arrays.asList("1", "2", "3", "4", "6", "8"));
        region17.put("Большая улица", Arrays.asList("90", "90к1", "92", "94", "100", "102", "102к1"));
        region17.put("Бульвар Оптимистов проезд", Collections.singletonList("12"));
        region17.put("Зелёная улица", Arrays.asList("17", "19", "21", "23"));

        Map<String, List<String>> region14 = new HashMap<>();
        region14.put("Большая улица", Collections.singletonList("94к1"));
        region14.put("Касимовское шоссе", Arrays.asList("38к1", "40к1", "40к2", "42", "42к1", "44", "44к1"));
        region14.put("Тимакова улица", Arrays.asList("2", "4", "6", "6к1", "6к2", "8", "8к1", "10"));

        Map<String, List<String>> region13 = new HashMap<>();
        region13.put("Большая улица", Arrays.asList("7", "7к1", "7к2", "15", "15к1", "17", "17к2", "19", "19к2"));
        region13.put("Касимовское шоссе", Arrays.asList("5", "7", "7к1", "12", "14/9"));
        region13.put("Советской Армии улица", Arrays.asList("12", "12к1", "14"));

        Map<String, List<String>> region23 = new HashMap<>();
        region23.put("Васильевская улица", Arrays.asList("49", "51", "51к1", "51к2", "51к3", "53", "53к1", "53к2"));
        region23.put("Васильевский проезд", Arrays.asList("5", "7", "10"));
        region23.put("Новосёлов улица", Collections.singletonList("3"));

        regions.put("Участок 17", region17);
        regions.put("Участок 14", region14);
        regions.put("Участок 13", region13);
        regions.put("Участок 23", region23);

        return regions;
    }

    public static String getRegion(String street, String house) {

        for(String key : getRegions().keySet()) {
            if (getRegions().get(key).get(street) != null) {
                if (getRegions().get(key).get(street).stream().anyMatch(r -> r.equals(house))) {
                    return key;
                }
            }
        }
        return "Участок 1";
    }
}
